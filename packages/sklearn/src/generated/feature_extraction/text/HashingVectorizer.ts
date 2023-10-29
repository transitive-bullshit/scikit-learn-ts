/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Convert a collection of text documents to a matrix of token occurrences.

  It turns a collection of text documents into a scipy.sparse matrix holding token occurrence counts (or binary occurrence information), possibly normalized as token frequencies if norm=’l1’ or projected on the euclidean unit sphere if norm=’l2’.

  This text vectorizer implementation uses the hashing trick to find the token string name to feature integer index mapping.

  This strategy has several advantages:

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.text.HashingVectorizer.html)
 */
export class HashingVectorizer {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      If `'filename'`, the sequence passed as an argument to fit is expected to be a list of filenames that need reading to fetch the raw content to analyze.

      @defaultValue `'content'`
     */
    input?: 'filename' | 'file' | 'content'

    /**
      If bytes or files are given to analyze, this encoding is used to decode.

      @defaultValue `'utf-8'`
     */
    encoding?: string

    /**
      Instruction on what to do if a byte sequence is given to analyze that contains characters not of the given `encoding`. By default, it is ‘strict’, meaning that a UnicodeDecodeError will be raised. Other values are ‘ignore’ and ‘replace’.

      @defaultValue `'strict'`
     */
    decode_error?: 'strict' | 'ignore' | 'replace'

    /**
      Remove accents and perform other character normalization during the preprocessing step. ‘ascii’ is a fast method that only works on characters that have a direct ASCII mapping. ‘unicode’ is a slightly slower method that works on any character. `undefined` (default) means no character normalization is performed.

      Both ‘ascii’ and ‘unicode’ use NFKD normalization from [`unicodedata.normalize`](https://docs.python.org/3/library/unicodedata.html#unicodedata.normalize "(in Python v3.12)").
     */
    strip_accents?: 'ascii' | 'unicode'

    /**
      Convert all characters to lowercase before tokenizing.

      @defaultValue `true`
     */
    lowercase?: boolean

    /**
      Override the preprocessing (string transformation) stage while preserving the tokenizing and n-grams generation steps. Only applies if `analyzer` is not callable.
     */
    preprocessor?: any

    /**
      Override the string tokenization step while preserving the preprocessing and n-grams generation steps. Only applies if `analyzer \== 'word'`.
     */
    tokenizer?: any

    /**
      If ‘english’, a built-in stop word list for English is used. There are several known issues with ‘english’ and you should consider an alternative (see [Using stop words](../feature_extraction.html#stop-words)).

      If a list, that list is assumed to contain stop words, all of which will be removed from the resulting tokens. Only applies if `analyzer \== 'word'`.
     */
    stop_words?: 'english' | any[]

    /**
      Regular expression denoting what constitutes a “token”, only used if `analyzer \== 'word'`. The default regexp selects tokens of 2 or more alphanumeric characters (punctuation is completely ignored and always treated as a token separator).

      If there is a capturing group in token\_pattern then the captured group content, not the entire match, becomes the token. At most one capturing group is permitted.
     */
    token_pattern?: string

    /**
      The lower and upper boundary of the range of n-values for different n-grams to be extracted. All values of n such that min\_n <= n <= max\_n will be used. For example an `ngram\_range` of `(1, 1)` means only unigrams, `(1, 2)` means unigrams and bigrams, and `(2, 2)` means only bigrams. Only applies if `analyzer` is not callable.
     */
    ngram_range?: any

    /**
      Whether the feature should be made of word or character n-grams. Option ‘char\_wb’ creates character n-grams only from text inside word boundaries; n-grams at the edges of words are padded with space.

      If a callable is passed it is used to extract the sequence of features out of the raw, unprocessed input.

      @defaultValue `'word'`
     */
    analyzer?: 'word' | 'char' | 'char_wb'

    /**
      The number of features (columns) in the output matrices. Small numbers of features are likely to cause hash collisions, but large numbers will cause larger coefficient dimensions in linear learners.
     */
    n_features?: number

    /**
      If `true`, all non zero counts are set to 1. This is useful for discrete probabilistic models that model binary events rather than integer counts.

      @defaultValue `false`
     */
    binary?: boolean

    /**
      Norm used to normalize term vectors. `undefined` for no normalization.

      @defaultValue `'l2'`
     */
    norm?: 'l1' | 'l2'

    /**
      When `true`, an alternating sign is added to the features as to approximately conserve the inner product in the hashed space even for small n\_features. This approach is similar to sparse random projection.

      @defaultValue `true`
     */
    alternate_sign?: boolean

    /**
      Type of the matrix returned by fit\_transform() or transform().
     */
    dtype?: any
  }) {
    this.id = `HashingVectorizer${crypto.randomUUID().split('-')[0]}`
    this.opts = opts || {}
  }

  get py(): PythonBridge {
    return this._py
  }

  set py(pythonBridge: PythonBridge) {
    this._py = pythonBridge
  }

  /**
    Initializes the underlying Python resources.

    This instance is not usable until the `Promise` returned by `init()` resolves.
   */
  async init(py: PythonBridge): Promise<void> {
    if (this._isDisposed) {
      throw new Error(
        'This HashingVectorizer instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('HashingVectorizer.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.feature_extraction.text import HashingVectorizer
try: bridgeHashingVectorizer
except NameError: bridgeHashingVectorizer = {}
`

    // set up constructor params
    await this._py.ex`ctor_HashingVectorizer = {'input': ${
      this.opts['input'] ?? undefined
    }, 'encoding': ${this.opts['encoding'] ?? undefined}, 'decode_error': ${
      this.opts['decode_error'] ?? undefined
    }, 'strip_accents': ${
      this.opts['strip_accents'] ?? undefined
    }, 'lowercase': ${this.opts['lowercase'] ?? undefined}, 'preprocessor': ${
      this.opts['preprocessor'] ?? undefined
    }, 'tokenizer': ${this.opts['tokenizer'] ?? undefined}, 'stop_words': ${
      this.opts['stop_words'] ?? undefined
    }, 'token_pattern': ${
      this.opts['token_pattern'] ?? undefined
    }, 'ngram_range': ${this.opts['ngram_range'] ?? undefined}, 'analyzer': ${
      this.opts['analyzer'] ?? undefined
    }, 'n_features': ${this.opts['n_features'] ?? undefined}, 'binary': ${
      this.opts['binary'] ?? undefined
    }, 'norm': ${this.opts['norm'] ?? undefined}, 'alternate_sign': ${
      this.opts['alternate_sign'] ?? undefined
    }, 'dtype': ${this.opts['dtype'] ?? undefined}}

ctor_HashingVectorizer = {k: v for k, v in ctor_HashingVectorizer.items() if v is not None}`

    await this._py
      .ex`bridgeHashingVectorizer[${this.id}] = HashingVectorizer(**ctor_HashingVectorizer)`

    this._isInitialized = true
  }

  /**
    Disposes of the underlying Python resources.

    Once `dispose()` is called, the instance is no longer usable.
   */
  async dispose() {
    if (this._isDisposed) {
      return
    }

    if (!this._isInitialized) {
      return
    }

    await this._py.ex`del bridgeHashingVectorizer[${this.id}]`

    this._isDisposed = true
  }

  /**
    Return a callable to process input data.

    The callable handles preprocessing, tokenization, and n-grams generation.
   */
  async build_analyzer(opts: {}): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This HashingVectorizer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'HashingVectorizer must call init() before build_analyzer()'
      )
    }

    // set up method params
    await this._py.ex`pms_HashingVectorizer_build_analyzer = {}

pms_HashingVectorizer_build_analyzer = {k: v for k, v in pms_HashingVectorizer_build_analyzer.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_HashingVectorizer_build_analyzer = bridgeHashingVectorizer[${this.id}].build_analyzer(**pms_HashingVectorizer_build_analyzer)`

    // convert the result from python to node.js
    return this
      ._py`res_HashingVectorizer_build_analyzer.tolist() if hasattr(res_HashingVectorizer_build_analyzer, 'tolist') else res_HashingVectorizer_build_analyzer`
  }

  /**
    Return a function to preprocess the text before tokenization.
   */
  async build_preprocessor(opts: {}): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This HashingVectorizer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'HashingVectorizer must call init() before build_preprocessor()'
      )
    }

    // set up method params
    await this._py.ex`pms_HashingVectorizer_build_preprocessor = {}

pms_HashingVectorizer_build_preprocessor = {k: v for k, v in pms_HashingVectorizer_build_preprocessor.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_HashingVectorizer_build_preprocessor = bridgeHashingVectorizer[${this.id}].build_preprocessor(**pms_HashingVectorizer_build_preprocessor)`

    // convert the result from python to node.js
    return this
      ._py`res_HashingVectorizer_build_preprocessor.tolist() if hasattr(res_HashingVectorizer_build_preprocessor, 'tolist') else res_HashingVectorizer_build_preprocessor`
  }

  /**
    Return a function that splits a string into a sequence of tokens.
   */
  async build_tokenizer(opts: {}): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This HashingVectorizer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'HashingVectorizer must call init() before build_tokenizer()'
      )
    }

    // set up method params
    await this._py.ex`pms_HashingVectorizer_build_tokenizer = {}

pms_HashingVectorizer_build_tokenizer = {k: v for k, v in pms_HashingVectorizer_build_tokenizer.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_HashingVectorizer_build_tokenizer = bridgeHashingVectorizer[${this.id}].build_tokenizer(**pms_HashingVectorizer_build_tokenizer)`

    // convert the result from python to node.js
    return this
      ._py`res_HashingVectorizer_build_tokenizer.tolist() if hasattr(res_HashingVectorizer_build_tokenizer, 'tolist') else res_HashingVectorizer_build_tokenizer`
  }

  /**
    Decode the input into a string of unicode symbols.

    The decoding strategy depends on the vectorizer parameters.
   */
  async decode(opts: {
    /**
      The string to decode.
     */
    doc?: string
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This HashingVectorizer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('HashingVectorizer must call init() before decode()')
    }

    // set up method params
    await this._py.ex`pms_HashingVectorizer_decode = {'doc': ${
      opts['doc'] ?? undefined
    }}

pms_HashingVectorizer_decode = {k: v for k, v in pms_HashingVectorizer_decode.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_HashingVectorizer_decode = bridgeHashingVectorizer[${this.id}].decode(**pms_HashingVectorizer_decode)`

    // convert the result from python to node.js
    return this
      ._py`res_HashingVectorizer_decode.tolist() if hasattr(res_HashingVectorizer_decode, 'tolist') else res_HashingVectorizer_decode`
  }

  /**
    Only validates estimator’s parameters.

    This method allows to: (i) validate the estimator’s parameters and (ii) be consistent with the scikit-learn transformer API.
   */
  async fit(opts: {
    /**
      Training data.
     */
    X?: any

    /**
      Not used, present for API consistency by convention.
     */
    y?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This HashingVectorizer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('HashingVectorizer must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_HashingVectorizer_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_HashingVectorizer_fit = {k: v for k, v in pms_HashingVectorizer_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_HashingVectorizer_fit = bridgeHashingVectorizer[${this.id}].fit(**pms_HashingVectorizer_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_HashingVectorizer_fit.tolist() if hasattr(res_HashingVectorizer_fit, 'tolist') else res_HashingVectorizer_fit`
  }

  /**
    Transform a sequence of documents to a document-term matrix.
   */
  async fit_transform(opts: {
    /**
      Samples. Each sample must be a text document (either bytes or unicode strings, file name or file object depending on the constructor argument) which will be tokenized and hashed.
     */
    X?: any

    /**
      Ignored. This parameter exists only for compatibility with sklearn.pipeline.Pipeline.
     */
    y?: any
  }): Promise<SparseMatrix[]> {
    if (this._isDisposed) {
      throw new Error(
        'This HashingVectorizer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'HashingVectorizer must call init() before fit_transform()'
      )
    }

    // set up method params
    await this._py.ex`pms_HashingVectorizer_fit_transform = {'X': ${
      opts['X'] ?? undefined
    }, 'y': ${opts['y'] ?? undefined}}

pms_HashingVectorizer_fit_transform = {k: v for k, v in pms_HashingVectorizer_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_HashingVectorizer_fit_transform = bridgeHashingVectorizer[${this.id}].fit_transform(**pms_HashingVectorizer_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_HashingVectorizer_fit_transform.tolist() if hasattr(res_HashingVectorizer_fit_transform, 'tolist') else res_HashingVectorizer_fit_transform`
  }

  /**
    Get metadata routing of this object.

    Please check [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.
   */
  async get_metadata_routing(opts: {
    /**
      A [`MetadataRequest`](sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information.
     */
    routing?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This HashingVectorizer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'HashingVectorizer must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_HashingVectorizer_get_metadata_routing = {'routing': ${
      opts['routing'] ?? undefined
    }}

pms_HashingVectorizer_get_metadata_routing = {k: v for k, v in pms_HashingVectorizer_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_HashingVectorizer_get_metadata_routing = bridgeHashingVectorizer[${this.id}].get_metadata_routing(**pms_HashingVectorizer_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_HashingVectorizer_get_metadata_routing.tolist() if hasattr(res_HashingVectorizer_get_metadata_routing, 'tolist') else res_HashingVectorizer_get_metadata_routing`
  }

  /**
    Build or fetch the effective stop words list.
   */
  async get_stop_words(opts: {}): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This HashingVectorizer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'HashingVectorizer must call init() before get_stop_words()'
      )
    }

    // set up method params
    await this._py.ex`pms_HashingVectorizer_get_stop_words = {}

pms_HashingVectorizer_get_stop_words = {k: v for k, v in pms_HashingVectorizer_get_stop_words.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_HashingVectorizer_get_stop_words = bridgeHashingVectorizer[${this.id}].get_stop_words(**pms_HashingVectorizer_get_stop_words)`

    // convert the result from python to node.js
    return this
      ._py`res_HashingVectorizer_get_stop_words.tolist() if hasattr(res_HashingVectorizer_get_stop_words, 'tolist') else res_HashingVectorizer_get_stop_words`
  }

  /**
    Only validates estimator’s parameters.

    This method allows to: (i) validate the estimator’s parameters and (ii) be consistent with the scikit-learn transformer API.
   */
  async partial_fit(opts: {
    /**
      Training data.
     */
    X?: any

    /**
      Not used, present for API consistency by convention.
     */
    y?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This HashingVectorizer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('HashingVectorizer must call init() before partial_fit()')
    }

    // set up method params
    await this._py.ex`pms_HashingVectorizer_partial_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_HashingVectorizer_partial_fit = {k: v for k, v in pms_HashingVectorizer_partial_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_HashingVectorizer_partial_fit = bridgeHashingVectorizer[${this.id}].partial_fit(**pms_HashingVectorizer_partial_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_HashingVectorizer_partial_fit.tolist() if hasattr(res_HashingVectorizer_partial_fit, 'tolist') else res_HashingVectorizer_partial_fit`
  }

  /**
    Set output container.

    See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.
   */
  async set_output(opts: {
    /**
      Configure output of `transform` and `fit\_transform`.
     */
    transform?: 'default' | 'pandas'
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This HashingVectorizer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('HashingVectorizer must call init() before set_output()')
    }

    // set up method params
    await this._py.ex`pms_HashingVectorizer_set_output = {'transform': ${
      opts['transform'] ?? undefined
    }}

pms_HashingVectorizer_set_output = {k: v for k, v in pms_HashingVectorizer_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_HashingVectorizer_set_output = bridgeHashingVectorizer[${this.id}].set_output(**pms_HashingVectorizer_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_HashingVectorizer_set_output.tolist() if hasattr(res_HashingVectorizer_set_output, 'tolist') else res_HashingVectorizer_set_output`
  }

  /**
    Transform a sequence of documents to a document-term matrix.
   */
  async transform(opts: {
    /**
      Samples. Each sample must be a text document (either bytes or unicode strings, file name or file object depending on the constructor argument) which will be tokenized and hashed.
     */
    X?: any
  }): Promise<SparseMatrix[]> {
    if (this._isDisposed) {
      throw new Error(
        'This HashingVectorizer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('HashingVectorizer must call init() before transform()')
    }

    // set up method params
    await this._py.ex`pms_HashingVectorizer_transform = {'X': ${
      opts['X'] ?? undefined
    }}

pms_HashingVectorizer_transform = {k: v for k, v in pms_HashingVectorizer_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_HashingVectorizer_transform = bridgeHashingVectorizer[${this.id}].transform(**pms_HashingVectorizer_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_HashingVectorizer_transform.tolist() if hasattr(res_HashingVectorizer_transform, 'tolist') else res_HashingVectorizer_transform`
  }
}
