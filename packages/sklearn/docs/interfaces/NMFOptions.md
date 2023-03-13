# NMFOptions

## Properties

### alpha\_H?

> `number` \| `"same"`

Constant that multiplies the regularization terms of `H`. Set it to zero to have no regularization on `H`. If “same” (default), it takes the same value as `alpha\_W`.

#### Default Value

`'same'`

Defined in:  [generated/decomposition/NMF.ts:487](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/NMF.ts#L487)

### alpha\_W?

> `number`

Constant that multiplies the regularization terms of `W`. Set it to zero (default) to have no regularization on `W`.

#### Default Value

`0`

Defined in:  [generated/decomposition/NMF.ts:480](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/NMF.ts#L480)

### beta\_loss?

> `number` \| `"frobenius"` \| `"kullback-leibler"` \| `"itakura-saito"`

Beta divergence to be minimized, measuring the distance between X and the dot product WH. Note that values different from ‘frobenius’ (or 2) and ‘kullback-leibler’ (or 1) lead to significantly slower fits. Note that for beta\_loss <= 0 (or ‘itakura-saito’), the input matrix X cannot contain zeros. Used only in ‘mu’ solver.

#### Default Value

`'frobenius'`

Defined in:  [generated/decomposition/NMF.ts:454](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/NMF.ts#L454)

### init?

> `"random"` \| `"nndsvd"` \| `"nndsvda"` \| `"nndsvdar"` \| `"custom"`

Method used to initialize the procedure. Valid options:

Defined in:  [generated/decomposition/NMF.ts:440](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/NMF.ts#L440)

### l1\_ratio?

> `number`

The regularization mixing parameter, with 0 <= l1\_ratio <= 1. For l1\_ratio = 0 the penalty is an elementwise L2 penalty (aka Frobenius Norm). For l1\_ratio = 1 it is an elementwise L1 penalty. For 0 < l1\_ratio < 1, the penalty is a combination of L1 and L2.

#### Default Value

`0`

Defined in:  [generated/decomposition/NMF.ts:494](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/NMF.ts#L494)

### max\_iter?

> `number`

Maximum number of iterations before timing out.

#### Default Value

`200`

Defined in:  [generated/decomposition/NMF.ts:468](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/NMF.ts#L468)

### n\_components?

> `number`

Number of components, if n\_components is not set all features are kept.

Defined in:  [generated/decomposition/NMF.ts:435](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/NMF.ts#L435)

### random\_state?

> `number`

Used for initialisation (when `init` == ‘nndsvdar’ or ‘random’), and in Coordinate Descent. Pass an int for reproducible results across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

Defined in:  [generated/decomposition/NMF.ts:473](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/NMF.ts#L473)

### shuffle?

> `boolean`

If true, randomize the order of coordinates in the CD solver.

#### Default Value

`false`

Defined in:  [generated/decomposition/NMF.ts:508](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/NMF.ts#L508)

### solver?

> `"cd"` \| `"mu"`

Numerical solver to use:

#### Default Value

`'cd'`

Defined in:  [generated/decomposition/NMF.ts:447](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/NMF.ts#L447)

### tol?

> `number`

Tolerance of the stopping condition.

#### Default Value

`0.0001`

Defined in:  [generated/decomposition/NMF.ts:461](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/NMF.ts#L461)

### verbose?

> `number`

Whether to be verbose.

#### Default Value

`0`

Defined in:  [generated/decomposition/NMF.ts:501](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/NMF.ts#L501)
