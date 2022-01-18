export default function useLazyImage(
	node,
	{ root = null, rootMargin = '0px', threshold = 0 } = {},
) {
	if (window && 'IntersectionObserver' in window) {
		const observer = new IntersectionObserver(
			(entries, self) => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						const image = entry.target;

						if (image.dataset.src) {
							image.src = image.dataset.src;
						}

						if (image.dataset.srcset) {
							image.srcset = image.dataset.srcset;
						}

						self.unobserve(image);
					}
				});
			},
			{
				root,
				rootMargin,
				threshold,
			},
		).observe(node);

		return {
			destroy() {
				if (observer) {
					observer.unobserve(node);
				}
			},
		};
	}
}
