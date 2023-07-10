import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface RecipeInterface {
  id?: string;
  title: string;
  instructions: string;
  image?: string;
  user_id?: string;
  organization_id?: string;
  status: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {};
}

export interface RecipeGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  instructions?: string;
  image?: string;
  user_id?: string;
  organization_id?: string;
  status?: string;
}
