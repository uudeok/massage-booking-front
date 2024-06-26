const palette = {
	kakaoColor: '#fee500',
	naverColor: '#03c75a',
	white: '#fff',
	black: '#000000',
	grey: '#D3D3D3',
	greenLg: '#97a393',
	greenDk: '#819977',
	fluorGreen: '#3ab96f',
	fluorGreenHover: '#28a25b',
	blue: '#3581ff',
	bluehover: '#5f98f7',
	iconic: '#5aaf77',
	warn: '#F65656',
	confirm: '#4BAF50',
	combi: '#4c9d68',
};

const devise = {
	smallMobileWidth: '320px',
	mobileWidth: '375px',
	bigMobileWidth: '425px',
	tabletWidth: '768px',
	notebookWidth: '1024px',
	bigNotebookWidth: '1440px',
};

const fonts = {
	pretend: 'Pretendard-Regular',
	gmarket: 'GmarketSansMedium',
	KBO: 'KBO-Dia-Gothic_bold',
};

const theme = {
	palette,
	devise,
	fonts,
};

export type ThemeType = typeof theme;

export default theme;
