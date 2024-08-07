//components/UI/ChangePassword.tsx
import React, { useState } from 'react';

interface ChangePasswordFormProps {
  email?: string | null;
}

const ChangePasswordForm: React.FC<ChangePasswordFormProps> = ({ email }) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setMessage('يجب تسجيل الدخول لتغيير كلمة المرور');
      return;
    }
    try {
      const res = await fetch('/api/changepassword', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          currentPassword,
          newPassword
        })
      });
      const data = await res.json();
      if (res.ok) {
        setMessage(data.message);
        setCurrentPassword('');
        setNewPassword('');
      } else {
        setMessage(data.error || 'حدث خطأ غير معروف');
      }
    } catch (error) {
      setMessage('حدث خطأ أثناء تغيير كلمة المرور');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="currentPassword" className="block mb-1">كلمة المرور الحالية</label>
        <input
          id="currentPassword"
          type="password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label htmlFor="newPassword" className="block mb-1">كلمة المرور الجديدة</label>
        <input
          id="newPassword"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
        تغيير كلمة المرور
      </button>
      {message && <p className="mt-2 text-center">{message}</p>}
    </form>
  );
};

export default ChangePasswordForm;
