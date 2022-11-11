import { Oval } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderWrapper>
      <Oval color="#ff6b08" secondaryColor="#ffffff" height={100} width={110} />
    </LoaderWrapper>
  );
};
