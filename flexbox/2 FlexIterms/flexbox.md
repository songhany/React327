
If you set only the flex-grow and flex-shrink values, flex-basis would default to zero. This is called an absolute flex. For example "flex: auto;“ remember this is same as ”flex: 1 1 auto;“
Absolute flex-items have their widths based solely on flex,

When you set only the flex-basis, you get a relative flex. For example "flex: 1;" same as ”flex: 1 1 0“. see flex: 'positive number'
relative flex items have their widths based on content size.

