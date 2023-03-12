[sklearn](../readme.md) / [Exports](../modules.md) / NMFOptions

# Interface: NMFOptions

## Table of contents

### Properties

- [alpha\_H](NMFOptions.md#alpha_h)
- [alpha\_W](NMFOptions.md#alpha_w)
- [beta\_loss](NMFOptions.md#beta_loss)
- [init](NMFOptions.md#init)
- [l1\_ratio](NMFOptions.md#l1_ratio)
- [max\_iter](NMFOptions.md#max_iter)
- [n\_components](NMFOptions.md#n_components)
- [random\_state](NMFOptions.md#random_state)
- [shuffle](NMFOptions.md#shuffle)
- [solver](NMFOptions.md#solver)
- [tol](NMFOptions.md#tol)
- [verbose](NMFOptions.md#verbose)

## Properties

### alpha\_H

• `Optional` **alpha\_H**: `number` \| ``"same"``

Constant that multiplies the regularization terms of `H`. Set it to zero to have no regularization on `H`. If “same” (default), it takes the same value as `alpha\_W`.

**`Default Value`**

`'same'`

#### Defined in

[generated/decomposition/NMF.ts:487](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/NMF.ts#L487)

___

### alpha\_W

• `Optional` **alpha\_W**: `number`

Constant that multiplies the regularization terms of `W`. Set it to zero (default) to have no regularization on `W`.

**`Default Value`**

`0`

#### Defined in

[generated/decomposition/NMF.ts:480](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/NMF.ts#L480)

___

### beta\_loss

• `Optional` **beta\_loss**: `number` \| ``"frobenius"`` \| ``"kullback-leibler"`` \| ``"itakura-saito"``

Beta divergence to be minimized, measuring the distance between X and the dot product WH. Note that values different from ‘frobenius’ (or 2) and ‘kullback-leibler’ (or 1) lead to significantly slower fits. Note that for beta\_loss <= 0 (or ‘itakura-saito’), the input matrix X cannot contain zeros. Used only in ‘mu’ solver.

**`Default Value`**

`'frobenius'`

#### Defined in

[generated/decomposition/NMF.ts:454](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/NMF.ts#L454)

___

### init

• `Optional` **init**: ``"random"`` \| ``"nndsvd"`` \| ``"nndsvda"`` \| ``"nndsvdar"`` \| ``"custom"``

Method used to initialize the procedure. Valid options:

#### Defined in

[generated/decomposition/NMF.ts:440](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/NMF.ts#L440)

___

### l1\_ratio

• `Optional` **l1\_ratio**: `number`

The regularization mixing parameter, with 0 <= l1\_ratio <= 1. For l1\_ratio = 0 the penalty is an elementwise L2 penalty (aka Frobenius Norm). For l1\_ratio = 1 it is an elementwise L1 penalty. For 0 < l1\_ratio < 1, the penalty is a combination of L1 and L2.

**`Default Value`**

`0`

#### Defined in

[generated/decomposition/NMF.ts:494](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/NMF.ts#L494)

___

### max\_iter

• `Optional` **max\_iter**: `number`

Maximum number of iterations before timing out.

**`Default Value`**

`200`

#### Defined in

[generated/decomposition/NMF.ts:468](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/NMF.ts#L468)

___

### n\_components

• `Optional` **n\_components**: `number`

Number of components, if n\_components is not set all features are kept.

#### Defined in

[generated/decomposition/NMF.ts:435](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/NMF.ts#L435)

___

### random\_state

• `Optional` **random\_state**: `number`

Used for initialisation (when `init` == ‘nndsvdar’ or ‘random’), and in Coordinate Descent. Pass an int for reproducible results across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

#### Defined in

[generated/decomposition/NMF.ts:473](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/NMF.ts#L473)

___

### shuffle

• `Optional` **shuffle**: `boolean`

If true, randomize the order of coordinates in the CD solver.

**`Default Value`**

`false`

#### Defined in

[generated/decomposition/NMF.ts:508](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/NMF.ts#L508)

___

### solver

• `Optional` **solver**: ``"cd"`` \| ``"mu"``

Numerical solver to use:

**`Default Value`**

`'cd'`

#### Defined in

[generated/decomposition/NMF.ts:447](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/NMF.ts#L447)

___

### tol

• `Optional` **tol**: `number`

Tolerance of the stopping condition.

**`Default Value`**

`0.0001`

#### Defined in

[generated/decomposition/NMF.ts:461](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/NMF.ts#L461)

___

### verbose

• `Optional` **verbose**: `number`

Whether to be verbose.

**`Default Value`**

`0`

#### Defined in

[generated/decomposition/NMF.ts:501](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/NMF.ts#L501)
