<docs lang="zh-CN">
嵌套表格。
</docs>

<docs lang="en-US">
Nested table.
</docs>

<script setup lang="ts">
import type { TableProps } from 'antdv-next'
import { DownOutlined } from '@antdv-next/icons'
import { h, resolveComponent } from 'vue'

interface ExpandedDataType {
  key: string
  date: string
  name: string
  upgradeNum: string
}

interface DataType {
  key: string
  name: string
  platform: string
  version: string
  upgradeNum: number
  creator: string
  createdAt: string
}

const items = [
  { key: '1', label: 'Action 1' },
  { key: '2', label: 'Action 2' },
]

const expandColumns: TableProps['columns'] = [
  { title: 'Date', dataIndex: 'date', key: 'date' },
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Status', key: 'state' },
  { title: 'Upgrade Status', dataIndex: 'upgradeNum', key: 'upgradeNum' },
  { title: 'Action', key: 'operation' },
]

const columns: TableProps['columns'] = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Platform', dataIndex: 'platform', key: 'platform' },
  { title: 'Version', dataIndex: 'version', key: 'version' },
  { title: 'Upgraded', dataIndex: 'upgradeNum', key: 'upgradeNum' },
  { title: 'Creator', dataIndex: 'creator', key: 'creator' },
  { title: 'Date', dataIndex: 'createdAt', key: 'createdAt' },
  { title: 'Action', key: 'operation' },
]

const expandDataSource: ExpandedDataType[] = Array.from({ length: 3 }).map((_, i) => ({
  key: String(i),
  date: '2014-12-24 23:12:00',
  name: 'This is production name',
  upgradeNum: 'Upgraded: 56',
}))

const dataSource: DataType[] = Array.from({ length: 3 }).map((_, i) => ({
  key: String(i),
  name: 'Screen',
  platform: 'iOS',
  version: '10.3.4.5654',
  upgradeNum: 500,
  creator: 'Jack',
  createdAt: '2014-12-24 23:12:00',
}))

const ATable = resolveComponent('ATable') as any
const ABadge = resolveComponent('ABadge') as any
const ADropdown = resolveComponent('ADropdown') as any
const ASpace = resolveComponent('ASpace') as any

function renderInnerBodyCell({ column }: { column: any }) {
  if (column.key === 'state') {
    return h(ABadge, { status: 'success', text: 'Finished' })
  }
  if (column.key === 'operation') {
    return h(ASpace, { size: 'middle' }, {
      default: () => [
        h('a', 'Pause'),
        h('a', 'Stop'),
        h(
          ADropdown,
          { menu: { items } },
          { default: () => h('a', ['More ', h(DownOutlined)]) },
        ),
      ],
    })
  }
  return undefined
}

function renderOuterBodyCell({ column }: { column: any }) {
  if (column.key === 'operation') {
    return h('a', 'Publish')
  }
  return undefined
}

const innerTableSlots = {
  bodyCell: renderInnerBodyCell,
}

const tableSlots = {
  bodyCell: renderOuterBodyCell,
}

function expandedRowRender() {
  return h(
    ATable,
    {
      columns: expandColumns,
      dataSource: expandDataSource,
      pagination: false,
    },
    innerTableSlots,
  )
}

const expandable = {
  expandedRowRender,
  defaultExpandedRowKeys: ['0'],
}
</script>

<template>
  <ATable
    v-slots="tableSlots"
    :columns="columns"
    :data-source="dataSource"
    :expandable="expandable"
  />
  <ATable
    v-slots="tableSlots"
    :columns="columns"
    :data-source="dataSource"
    :expandable="expandable"
    size="middle"
  />
  <ATable
    v-slots="tableSlots"
    :columns="columns"
    :data-source="dataSource"
    :expandable="expandable"
    size="small"
  />
</template>
