import { ReactNode } from 'react';
import LoadingBar from './LoadingBar';

type TProps = {
	isLoading: boolean;
	children: ReactNode;
};

const FetchWithLoading = ({ isLoading, children }: TProps) => {
	return <>{isLoading ? <LoadingBar /> : children}</>;
};

export default FetchWithLoading;
