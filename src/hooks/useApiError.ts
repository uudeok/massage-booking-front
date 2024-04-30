const useApiError = () => {
	const errorHandler = (status: number) => {
		console.log('status', status);
		switch (status) {
			case 404:
				return '페이지를 찾을 수 없습니다';
				break;

			case 500:
				return '서버에 접속할 수 없습니다';
				break;

			case 401:
				return '인증되지 않은 유저입니다';
				break;

			default:
				return '오류가 발생했습니다';
				break;
		}
	};

	return { errorHandler };
};

export default useApiError;
