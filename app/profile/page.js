import { getUser } from '@/lib/auth.action';
import React from 'react'
import { QRCodeSVG } from 'qrcode.react';

const page = async () => {
  const user = await getUser();

  return (
    <>
      <div>
        <h1>Profile</h1>
        <p>Name: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Role: {user.role}</p>
        <p>QR Code:</p>
        <QRCodeSVG className='w-40 h-40 bg-white p-2' value={user._id} />
      </div>
    </>
  )
}

export default page