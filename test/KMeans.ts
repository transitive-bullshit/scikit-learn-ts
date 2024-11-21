import * as sklearn from 'sklearn'
import { expect, test } from 'vitest'

test(
  `KMeans`,
  {
    timeout: 60_000
  },
  async () => {
    const py = await sklearn.createPythonBridge()

    const v = [
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      [5, 1, 3, 3, 5, 4, 8, 8, 8, 10],
      [2, 8, 7, 10, 0, 9, 2, 4, 9, 1]
    ]

    const s = new sklearn.KMeans({ n_clusters: 2 })
    await s.init(py)

    const res = await s.fit_predict({ X: v })
    expect(Array.isArray(res)).toBeTruthy()
    expect(res.length).toBe(v.length)
    for (const r of res) {
      expect(r === 0 || r === 1).toBeTruthy()
    }

    // test accessor
    const n_iter = await s.n_iter_
    expect(typeof n_iter).toBe('number')

    // test separate methods
    const res0 = await s.fit({ X: v })
    expect(res0).toBeTruthy()

    const res1 = await s.predict({ X: v })
    expect(res1).toBeTruthy()

    await s.dispose()
    await py.disconnect()
  }
)
