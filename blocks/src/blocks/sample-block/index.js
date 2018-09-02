import '../../img/balloon.jpg';

const { registerBlockType } = wp.blocks;

registerBlockType('block-foundation/main', {
	title: 'Sample Block',
	icon: 'heart',
	category: 'common',
	edit({ attributes, className, setAttributes }) {
		return (
			<p className={`${className} sample-block`}>This is a sample block in the editor.</p>
		);
	},
	save({ attributes }) {
		return (
			<p className="sample-block">This is a sample block in the frontend.</p>
		);
	},
});
