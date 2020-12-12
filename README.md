### This package is meant to be used in conjunction with (Laravel hybrid SPA](https://github.com/mustafarefaey/laravel-hybrid-spa). It provides the functionality to load page state.


# Installation

```bash
npm install @mustafarefaey/laravel-hybrid-spa-page-state-loader
```

# Usage

```bash
import { loadPageState } from '@mustafarefaey/laravel-hybrid-spa-page-state-loader';
```

After creating an instance of Vue router, add this navigation guard

```bash
router.beforeEach(async (to, from, next) => {
  const pageStateLoaded = await loadPageState(
    '__PAGE_STATE__',
    to.fullPath,
    (err) => console.error(err)
  );

  if (pageStateLoaded) {
    next();
  } else {
    next(false);
  }
});
```
