# EllipticEnvelopeOptions

## Properties

### assume\_centered?

> `boolean`

If `true`, the support of robust location and covariance estimates is computed, and a covariance estimate is recomputed from it, without centering the data. Useful to work with data whose mean is significantly equal to zero but is not exactly zero. If `false`, the robust location and covariance are directly computed with the FastMCD algorithm without additional treatment.

#### Default Value

`false`

Defined in:  [generated/covariance/EllipticEnvelope.ts:783](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L783)

### contamination?

> `number`

The amount of contamination of the data set, i.e. the proportion of outliers in the data set. Range is (0, 0.5\].

#### Default Value

`0.1`

Defined in:  [generated/covariance/EllipticEnvelope.ts:795](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L795)

### random\_state?

> `number`

Determines the pseudo random number generator for shuffling the data. Pass an int for reproducible results across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

Defined in:  [generated/covariance/EllipticEnvelope.ts:800](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L800)

### store\_precision?

> `boolean`

Specify if the estimated precision is stored.

#### Default Value

`true`

Defined in:  [generated/covariance/EllipticEnvelope.ts:776](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L776)

### support\_fraction?

> `number`

The proportion of points to be included in the support of the raw MCD estimate. If `undefined`, the minimum value of support\_fraction will be used within the algorithm: `\[n\_sample + n\_features + 1\] / 2`. Range is (0, 1).

Defined in:  [generated/covariance/EllipticEnvelope.ts:788](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L788)
