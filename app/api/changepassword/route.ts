// app/api/changepassword/route.ts
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import User from '@/models/User';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/auth";
import connect from "@/utils/db";

export async function POST(req: NextRequest) {
  await connect();

  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'يجب تسجيل الدخول' }, { status: 401 });
    }

    const { email, currentPassword, newPassword } = await req.json();

    if (email !== session.user?.email) {
      return NextResponse.json({ error: 'غير مصرح' }, { status: 403 });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: 'المستخدم غير موجود' }, { status: 404 });
    }

    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return NextResponse.json({ error: 'كلمة المرور الحالية غير صحيحة' }, { status: 400 });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    user.password = hashedPassword;
    await user.save();

    return NextResponse.json({ message: 'تم تغيير كلمة المرور بنجاح' }, { status: 200 });
  } catch (error) {
    console.error('خطأ في تغيير كلمة المرور:', error);
    return NextResponse.json({ error: 'حدث خطأ أثناء تغيير كلمة المرور' }, { status: 500 });
  }
}
