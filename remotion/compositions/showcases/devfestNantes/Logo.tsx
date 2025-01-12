import {
	Easing,
	Img,
	interpolate,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

export const Logo = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const logoWidth = 250;

	const pictureSlide = spring({
		frame,
		fps,
		from: -logoWidth,
		to: 30,
		durationInFrames: 30,
	});

	const pictureSlideBack = interpolate(frame, [300, 320], [0, logoWidth + 30], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
		easing: Easing.out(Easing.ease),
	});

	return (
		<Img
			src={staticFile(
				'/images/showcases/devfestNantes/logo-devfest-mgm_transparent.svg',
			)}
			width={logoWidth}
			height="auto"
			style={{
				position: 'absolute',
				right: pictureSlide - pictureSlideBack,
				top: 20,
			}}
		/>
	);
};
