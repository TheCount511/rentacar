import { Dispatch, MouseEventHandler, SetStateAction } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  textStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface FilterProps {
  manufacturer: string;
  year: number;
  fuel: string;
  limit: number;
  model: string;
  message?: string;
}

export interface HomeProps {
  searchParams: FilterProps;
}

export interface SearchBarProps {
  setManufacturer: (searchManufacturer: string) => void;
  setModel: (searchModel: string) => void;
}
// export interface SearchManufacturerProps {
//   selected: string;
//   setSelected: (selected: string) => void;
// }
export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface OptionProps {
  title: string;
  value: string;
}
export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
  setFilter?: Dispatch<SetStateAction<string> | SetStateAction<number>>;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface CarCardProps {
  car: CarProps;
}

export interface showMoreProps {
  pageNumber: number;
  isNext: boolean;
  setLimit?: Dispatch<SetStateAction<number>>;
}
