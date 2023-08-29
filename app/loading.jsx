import Skeleton from "./components/Skeleton";

const LoadingPage = () => {
	return (
		// <div className="loader">
		// 	<div className="spinner"></div>
		// </div>

		<div className="space-y-6">
			<div className="space-y-2">
				<Skeleton className="w-[30ch] h-[1.25rem]" />
				<Skeleton className="w-[45ch] h-[1rem]" />
			</div>
			<div className="space-y-2">
				<Skeleton className="w-[30ch] h-[1.25rem]" />
				<Skeleton className="w-[45ch] h-[1rem]" />
			</div>
			<div className="space-y-2">
				<Skeleton className="w-[30ch] h-[1.25rem]" />
				<Skeleton className="w-[45ch] h-[1rem]" />
			</div>
		</div>
	);
};
export default LoadingPage;