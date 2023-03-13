# LedoitWolfOptions

## Properties

### assume\_centered?

> `boolean`

If `true`, data will not be centered before computation. Useful when working with data whose mean is almost, but not exactly zero. If `false` (default), data will be centered before computation.

#### Default Value

`false`

Defined in:  [generated/covariance/LedoitWolf.ts:405](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L405)

### block\_size?

> `number`

Size of blocks into which the covariance matrix will be split during its Ledoit-Wolf estimation. This is purely a memory optimization and does not affect results.

#### Default Value

`1000`

Defined in:  [generated/covariance/LedoitWolf.ts:412](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L412)

### store\_precision?

> `boolean`

Specify if the estimated precision is stored.

#### Default Value

`true`

Defined in:  [generated/covariance/LedoitWolf.ts:398](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L398)
