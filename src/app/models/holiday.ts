/* eslint-disable @typescript-eslint/naming-convention */
export interface Holiday {
  date: Date;
  name: string;
  local_name: string;
  country_code: string;
  regions: string[];
  types: string[];
}
