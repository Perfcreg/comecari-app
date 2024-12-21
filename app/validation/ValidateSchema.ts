import * as Yup from 'yup';

export const RegisterSchema = Yup.object().shape({
    fullName: Yup.string()
      .required('Full Name is required'),
      // .matches('Full Name should only contain letters'),
      
    phoneNumber: Yup.string()
      .required('Phone Number is required')
      .matches(/^\d{10}$/, 'Phone Number should be exactly 10 digits'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 9 characters')
      .required('Password is required'),
    refer: Yup.string()
      .min(6, 'Referal code must be at least 6 characters')
  });

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
  .email('Invalid email address')
  .required('Email is required'),
  password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
})

export const UpdateProfileSchema = Yup.object().shape({
  fullName: Yup.string()
  .required('Fullname is required and as used with KYC data'),
  dob: Yup.string()
    .required('Data field is required'),
  userName: Yup.string()
  .required('Data field is required'),
  gender: Yup.string()
  .required('Field is required'),
})

export const ChangePasswordSchema = Yup.object().shape({
  oldPassword: Yup.string()
    .required('Old password is required'),
  newPassword: Yup.string()
    .required('New password is required')
    .min(8, 'New password must be at least 8 characters long'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('newPassword')], 'Passwords must match')
    .required('Confirm new password is required'),
});

export const AddBvnSchema = Yup.object().shape({
  bvn: Yup.string()
    .required('BVN is required')
    .max(10, 'BVN must be 10 digits')
    .min(10, 'BVN must be 10 digits'),
});
// create validation schema for adding cards
export const AddCardSchema = Yup.object().shape({
  cardNumber: Yup.string()
    .required('Card number is required')
    .matches(/^\d{16}$/, 'Card number must be 16 digits'),
  expiryDate: Yup.string()
    .required('Expiry date is required')
    .matches(/^\d{2}\/\d{2}$/, 'Expiry date must be in the format MM/YY'),
  cvv: Yup.string()
    .required('CVV is required')
    .matches(/^\d{3}$/, 'CVV must be 3 digits'),
});

// create add bank validation
export const addBankValidation = Yup.object().shape({
  // bank: Yup.string().required('Bank name is required'),
  accountNumber: Yup.string()
    .required('Account number is required')
    .matches(/^\d{10}$/, 'Account number must be 10 digits'),
});

export const createAjoValidation = Yup.object().shape({
  planName: Yup.string().required('Plan Name is required'),
  amount: Yup.string().required('Overall Saving Amount is required') ,
  frequency: Yup.string().required('Saving Frequency is required'),
  participant: Yup.number().required('Maximum Participant is required').integer('Must be an integer').positive('Must be positive').max(20, 'Must be less than 20'),
});

export const createAjoValidation2 = Yup.object().shape({
  planDuration: Yup.string().required('Plan Duration is required'),
  amountTopay: Yup.number().required('Amount to save is required').positive('Amount must be positive'),
  startDay: Yup.string().required('Start Day is required'),
  endDay: Yup.string().required('End Day is required'),
  preferredTime: Yup.string().required('Preffered Time is required'),
  dayOfTheWeek: Yup.string().required('Select a Day'),
});

export const joinPlan = Yup.object().shape({
  planCode: Yup.string().required('Enter a Plan code')
});

export const forgetPassword = Yup.object().shape({
  phoneNumber: Yup.string()
      .required('Phone Number is required')
      .matches(/^\d{10}$/, 'Phone Number should be exactly 10 digits'),
})

export const phoneSchema = Yup.object().shape({
  phoneNumber: Yup.string()
      .required('Phone Number is required')
      .matches(/^\d{10}$/, 'Phone Number should be exactly 10 digits'),
})