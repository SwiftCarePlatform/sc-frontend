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
