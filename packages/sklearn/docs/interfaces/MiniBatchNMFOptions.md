# MiniBatchNMFOptions

## Properties

### alpha\_H?

> `number` \| `"same"`

Constant that multiplies the regularization terms of `H`. Set it to zero to have no regularization on `H`. If “same” (default), it takes the same value as `alpha\_W`.

#### Default Value

`'same'`

Defined in:  [generated/decomposition/MiniBatchNMF.ts:574](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L574)

### alpha\_W?

> `number`

Constant that multiplies the regularization terms of `W`. Set it to zero (default) to have no regularization on `W`.

#### Default Value

`0`

Defined in:  [generated/decomposition/MiniBatchNMF.ts:567](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L567)

### batch\_size?

> `number`

Number of samples in each mini-batch. Large batch sizes give better long-term convergence at the cost of a slower start.

#### Default Value

`1024`

Defined in:  [generated/decomposition/MiniBatchNMF.ts:532](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L532)

### beta\_loss?

> `number` \| `"frobenius"` \| `"kullback-leibler"` \| `"itakura-saito"`

Beta divergence to be minimized, measuring the distance between `X` and the dot product `WH`. Note that values different from ‘frobenius’ (or 2) and ‘kullback-leibler’ (or 1) lead to significantly slower fits. Note that for `beta\_loss <= 0` (or ‘itakura-saito’), the input matrix `X` cannot contain zeros.

#### Default Value

`'frobenius'`

Defined in:  [generated/decomposition/MiniBatchNMF.ts:539](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L539)

### forget\_factor?

> `number`

Amount of rescaling of past information. Its value could be 1 with finite datasets. Choosing values < 1 is recommended with online learning as more recent batches will weight more than past batches.

#### Default Value

`0.7`

Defined in:  [generated/decomposition/MiniBatchNMF.ts:588](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L588)

### fresh\_restarts?

> `boolean`

Whether to completely solve for W at each step. Doing fresh restarts will likely lead to a better solution for a same number of iterations but it is much slower.

#### Default Value

`false`

Defined in:  [generated/decomposition/MiniBatchNMF.ts:595](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L595)

### fresh\_restarts\_max\_iter?

> `number`

Maximum number of iterations when solving for W at each step. Only used when doing fresh restarts. These iterations may be stopped early based on a small change of W controlled by `tol`.

#### Default Value

`30`

Defined in:  [generated/decomposition/MiniBatchNMF.ts:602](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L602)

### init?

> `"random"` \| `"nndsvd"` \| `"nndsvda"` \| `"nndsvdar"` \| `"custom"`

Method used to initialize the procedure. Valid options:

Defined in:  [generated/decomposition/MiniBatchNMF.ts:525](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L525)

### l1\_ratio?

> `number`

The regularization mixing parameter, with 0 <= l1\_ratio <= 1. For l1\_ratio = 0 the penalty is an elementwise L2 penalty (aka Frobenius Norm). For l1\_ratio = 1 it is an elementwise L1 penalty. For 0 < l1\_ratio < 1, the penalty is a combination of L1 and L2.

#### Default Value

`0`

Defined in:  [generated/decomposition/MiniBatchNMF.ts:581](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L581)

### max\_iter?

> `number`

Maximum number of iterations over the complete dataset before timing out.

#### Default Value

`200`

Defined in:  [generated/decomposition/MiniBatchNMF.ts:560](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L560)

### max\_no\_improvement?

> `number`

Control early stopping based on the consecutive number of mini batches that does not yield an improvement on the smoothed cost function. To disable convergence detection based on cost function, set `max\_no\_improvement` to `undefined`.

#### Default Value

`10`

Defined in:  [generated/decomposition/MiniBatchNMF.ts:553](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L553)

### n\_components?

> `number`

Number of components, if `n\_components` is not set all features are kept.

Defined in:  [generated/decomposition/MiniBatchNMF.ts:520](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L520)

### random\_state?

> `number`

Used for initialisation (when `init` == ‘nndsvdar’ or ‘random’), and in Coordinate Descent. Pass an int for reproducible results across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

Defined in:  [generated/decomposition/MiniBatchNMF.ts:612](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L612)

### tol?

> `number`

Control early stopping based on the norm of the differences in `H` between 2 steps. To disable early stopping based on changes in `H`, set `tol` to 0.0.

#### Default Value

`0.0001`

Defined in:  [generated/decomposition/MiniBatchNMF.ts:546](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L546)

### transform\_max\_iter?

> `number`

Maximum number of iterations when solving for W at transform time. If `undefined`, it defaults to `max\_iter`.

Defined in:  [generated/decomposition/MiniBatchNMF.ts:607](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L607)

### verbose?

> `boolean`

Whether to be verbose.

#### Default Value

`false`

Defined in:  [generated/decomposition/MiniBatchNMF.ts:619](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L619)
