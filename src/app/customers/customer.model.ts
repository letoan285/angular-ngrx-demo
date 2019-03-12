export interface Customer {
  id?: number;
  customer_name: string;
  sex?: string;
  dob?: Date;
  phone?: string;
  email?: string;
  username?: string;
  password?: string;
  avatar?: string;
  code?: string;
  active?: number;
  city?: string;
  district?: string;
  commune?: string;
  village?: string;
  lat?: number;
  lng?: number;
  status?: number;
  order_id?: number;
  remember_token?: string;
  updated_at?: Date;
}
