# IsotonicRegressionOptions

## Properties

### increasing?

> `boolean` \| `"auto"`

Determines whether the predictions should be constrained to increase or decrease with `X`. ‘auto’ will decide based on the Spearman correlation estimate’s sign.

#### Default Value

`true`

Defined in:  [generated/isotonic/IsotonicRegression.ts:515](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L515)

### out\_of\_bounds?

> `"nan"` \| `"clip"` \| `"raise"`

Handles how `X` values outside of the training domain are handled during prediction.

#### Default Value

`'nan'`

Defined in:  [generated/isotonic/IsotonicRegression.ts:522](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L522)

### y\_max?

> `number`

Upper bound on the highest predicted value (the maximum may still be lower). If not set, defaults to +inf.

Defined in:  [generated/isotonic/IsotonicRegression.ts:508](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L508)

### y\_min?

> `number`

Lower bound on the lowest predicted value (the minimum value may still be higher). If not set, defaults to -inf.

Defined in:  [generated/isotonic/IsotonicRegression.ts:503](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L503)
