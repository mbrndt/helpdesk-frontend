const Skeleton = ({ className }) => {
	return (
		<div
			className={`bg-slate-200 motion-safe:animate-pulse rounded ${className}`}
		/>
	);
};

export default Skeleton;