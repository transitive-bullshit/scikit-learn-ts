[sklearn](../readme.md) / [Exports](../modules.md) / BernoulliRBMOptions

# Interface: BernoulliRBMOptions

## Table of contents

### Properties

- [batch\_size](BernoulliRBMOptions.md#batch_size)
- [learning\_rate](BernoulliRBMOptions.md#learning_rate)
- [n\_components](BernoulliRBMOptions.md#n_components)
- [n\_iter](BernoulliRBMOptions.md#n_iter)
- [random\_state](BernoulliRBMOptions.md#random_state)
- [verbose](BernoulliRBMOptions.md#verbose)

## Properties

### batch\_size

• `Optional` **batch\_size**: `number`

Number of examples per minibatch.

**`Default Value`**

`10`

#### Defined in

[generated/neural_network/BernoulliRBM.ts:519](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L519)

___

### learning\_rate

• `Optional` **learning\_rate**: `number`

The learning rate for weight updates. It is *highly* recommended to tune this hyper-parameter. Reasonable values are in the 10\*\*\[0., -3.\] range.

**`Default Value`**

`0.1`

#### Defined in

[generated/neural_network/BernoulliRBM.ts:512](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L512)

___

### n\_components

• `Optional` **n\_components**: `number`

Number of binary hidden units.

**`Default Value`**

`256`

#### Defined in

[generated/neural_network/BernoulliRBM.ts:505](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L505)

___

### n\_iter

• `Optional` **n\_iter**: `number`

Number of iterations/sweeps over the training dataset to perform during training.

**`Default Value`**

`10`

#### Defined in

[generated/neural_network/BernoulliRBM.ts:526](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L526)

___

### random\_state

• `Optional` **random\_state**: `number`

Determines random number generation for:

#### Defined in

[generated/neural_network/BernoulliRBM.ts:538](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L538)

___

### verbose

• `Optional` **verbose**: `number`

The verbosity level. The default, zero, means silent mode. Range of values is \[0, inf\].

**`Default Value`**

`0`

#### Defined in

[generated/neural_network/BernoulliRBM.ts:533](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L533)
