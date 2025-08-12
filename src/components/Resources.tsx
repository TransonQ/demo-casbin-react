/** 测试指定资源的权限 */
const options = [
  { value: '', label: '' },
  { value: 'audit.vastai.io/traces', label: '审计列表' },
  { value: 'cluster.vastai.io/clusters', label: '集群列表' },
  { value: 'subcluster.vastai.io/datacenter', label: '数据中心详情' },
]

export function Resources({
  value,
  onChange,
}: {
  value: string | undefined
  onChange: (value: string) => void
}) {
  return (
    <select
      className='w-1/2 border rounded-lg'
      value={value}
      onChange={(event) => {
        onChange(event.target.value)
      }}
    >
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
  )
}
