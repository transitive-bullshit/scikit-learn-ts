import * as sklearn from 'sklearn'
import test from 'ava'

test(`MinMaxScaler`, async (t) => {
  const py = await sklearn.createPythonBridge()

  const v = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    [5, 1, 3, 3, 5, 4, 8, 8, 8, 10],
    [2, 8, 7, 10, 0, 9, 2, 4, 9, 1]
  ]

  const s = new sklearn.MinMaxScaler()
  await s.init(py)
  const res = await s.fit_transform({ X: v })

  t.true(Array.isArray(res))
  t.is(res.length, v.length)
  for (const r of res) {
    t.true(Array.isArray(r))
    t.is(r.length, v[0].length)
  }

  await s.dispose()
  await py.disconnect()
})
