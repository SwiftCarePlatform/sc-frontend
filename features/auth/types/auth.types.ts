export type SignUpInputs = {
  f_name: string;
  l_name: string;
  email: string;
  p_number: string;
  dob: Date;
  gender: string;
  role: string;
  password: string;
};

export type SignUpResponse = {
  message: string;
  verification_link: string;
  firebase_uid: string;
};

export type LoginInputs = {
  email: string;
  password: string;
};

export type LoginResponse = {
  message: string;
  idToken: string;
  user: User;
};

export type User = {
  _id: string;
  f_name: string;
  l_name: string;
  email: string;
  p_number: string;
  dob: Date;
  role: string;
  gender: string;
  verified: boolean;
  created_at: Date;
  updated_at: Date;
};

export type ForgotPasswordInputs = {
  email: string;
};

export type ForgotPasswordResponse = {
  message: string;
  reset_link: string;
};
