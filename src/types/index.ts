import { FontType, FontWeight } from '../components/Typography/types';

export * from '../components/Back/types';
export * from '../components/Button/types';
export * from '../components/Header/types';
export * from '../components/Helpers/types';
export * from '../components/InputField/types';
export * from '../components/SearchBar/types';
export * from '../components/Tag/types';
export * from '../components/Typography/types';

export interface FontNameSpace {
    fontWeight: FontWeight;
    fontType: FontType;
    fontSize: number;
}
