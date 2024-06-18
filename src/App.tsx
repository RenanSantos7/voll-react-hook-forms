import { RouterProvider } from 'react-router-dom';
import DataProvider from './contexts/DataContext';
import router from './router';
import { StyleSheetManager } from 'styled-components';

export default function App() {
	return (
		<DataProvider>
			<RouterProvider router={router} />
		</DataProvider>
	);
}
