# PolynomialFeaturesOptions

## Properties

### degree?

> `number`

If a single int is given, it specifies the maximal degree of the polynomial features. If a tuple `(min\_degree, max\_degree)` is passed, then `min\_degree` is the minimum and `max\_degree` is the maximum polynomial degree of the generated features. Note that `min\_degree=0` and `min\_degree=1` are equivalent as outputting the degree zero term is determined by `include\_bias`.

#### Default Value

`2`

Defined in:  [generated/preprocessing/PolynomialFeatures.ts:362](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L362)

### include\_bias?

> `boolean`

If `true` (default), then include a bias column, the feature in which all polynomial powers are zero (i.e. a column of ones - acts as an intercept term in a linear model).

#### Default Value

`true`

Defined in:  [generated/preprocessing/PolynomialFeatures.ts:376](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L376)

### interaction\_only?

> `boolean`

If `true`, only interaction features are produced: features that are products of at most `degree` *distinct* input features, i.e. terms with power of 2 or higher of the same input feature are excluded:

#### Default Value

`false`

Defined in:  [generated/preprocessing/PolynomialFeatures.ts:369](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L369)

### order?

> `"C"` \| `"F"`

Order of output array in the dense case. `'F'` order is faster to compute, but may slow down subsequent estimators.

#### Default Value

`'C'`

Defined in:  [generated/preprocessing/PolynomialFeatures.ts:383](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L383)
