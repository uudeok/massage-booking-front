import Booking from '../components/Booking/Booking';
import Information from '../components/Notice';
import Massage from '../components/Program/Massage';
import Layout from '../layout/Layout';

const HomePage = () => {
	return (
		<Layout>
			<Booking />
			<Massage />
			<Information />
		</Layout>
	);
};

export default HomePage;
