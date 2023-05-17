export interface IUser {
  user_id: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  roles: Role[];
  profile: Profile | null;
}

export interface Role {
  role_id: string;
  value: string;
  description: string;
}

export interface Profile {
  profile_id: string;
  first_name: string;
  last_name: string;
  phone: string;
  city: string;
  user_id: string;
}
