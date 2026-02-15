---
title: 组件更新日志
---

## V1.0.3

本次版本以 **测试覆盖率提升、文档修复以及稳定性优化** 为主，同时同步了 antd v6.3.0，并对 css-in-js 进行了性能优化。

**✨ 新功能 Features**

* 同步 **antd v6.3.0** 并优化 css-in-js 性能（#163）
* 支持 SSR，并为 ColorPicker / TimePicker / DatePicker 新增 `valueFormat`（#177）
* 同步 Skeleton 组件（#171）
* 文档站支持自定义主题（#166、#178）
* Avatar 与 AvatarGroup 新增单元测试（#126）

**🐞 问题修复 Fixes**

* 修复 trigger 点击无法关闭的问题（#134）
* 修复 Modal 在 info/success/warning 模式下取消按钮隐藏（#167）
* 修复 TreeSelect 多选 Checkbox 样式问题（#169）
* 修复 Progress 动画溢出问题（#173）
* 修复 Layout Sider 响应式折叠逻辑（#158、#155）
* 修复 eslint 配置类型错误（#142）
* 修复变量引用错误（#180）


**🧪 单元测试 Tests**

本版本大幅补充组件测试与语义 DOM 测试，包括：

Avatar、Badge、Breadcrumb、Button、Calendar、Divider、Empty、Flex、Input、InputNumber、Layout、QRCode、Rate、Result、Segmented、Space、Switch、Transfer、Tree、TreeSelect 等组件。

相关 PR：#128、#130、#136、#137、#140、#143、#145、#147、#148、#151、#154、#156、#159、#160、#161、#162、#172、#175、#176


**📝 文档更新 Documentation**

* 修复 DatePicker、Select、Upload、Drawer、Image、Anchor、Pagination 等 API 文档格式问题
* 更新 Layout 文档中 breakpoint 与 collapse 回调类型
* 修复 Grid 文档语法
* 修复 FloatButton API 示例
* 更新 Button 文档链接

相关 PR：#131、#132、#133、#135、#138、#139、#144、#146、#150、#153、#164、#181

---

**👏 新贡献者 New Contributors**

感谢以下社区贡献者的首次参与：

* @Darkingtail
* @shiqkuangsan
* @wujighostking
* @rookie-orange


**Full Changelog**
https://github.com/antdv-next/antdv-next/compare/antdv-next@1.0.2...antdv-next@1.0.3


## V1.0.2

**新功能**

* feat：同步 Ant Design v6.2.3（@aibayanyu20）[#102](https://github.com/antdv-next/antdv-next/pull/102)
* feat：新增 `prepare` 脚本（@qianYuanJ）[#109](https://github.com/antdv-next/antdv-next/pull/109)
* docs：文档新增全局搜索（@aibayanyu20）[#122](https://github.com/antdv-next/antdv-next/pull/122)

**问题修复**

* fix(input-number)：修复 min/max 响应丢失问题并移除多余的 console 输出（@selicens）[#104](https://github.com/antdv-next/antdv-next/pull/104)
* fix：修复 CSS 变量计算错误（@ffgenius）[#107](https://github.com/antdv-next/antdv-next/pull/107)
* fix：修复 Vue Language Tools 事件提示缺失问题（@aibayanyu20）[#108](https://github.com/antdv-next/antdv-next/pull/108)
* fix：修复 RangePicker 相关问题（@aibayanyu20）[#112](https://github.com/antdv-next/antdv-next/pull/112)
* fix(popconfirm)：修复在 Promise 场景下异步关闭失效的问题（@selicens）[#114](https://github.com/antdv-next/antdv-next/pull/114)
* fix：修复 Menu 标题默认值为 `null` 的问题（@aibayanyu20）[#125](https://github.com/antdv-next/antdv-next/pull/125)

**重构与维护**

* refactor(i18n)：集中管理 i18n 文件（@ffgenius）[#116](https://github.com/antdv-next/antdv-next/pull/116)
* chore(i18n)：将内联语言配置抽离为统一文件（@ffgenius）[#124](https://github.com/antdv-next/antdv-next/pull/124)
* chore：更新文档（@yushi0114）[#111](https://github.com/antdv-next/antdv-next/pull/111)

**测试**

* test(typography)：新增测试用例（@cc-hearts）[#115](https://github.com/antdv-next/antdv-next/pull/115)
* test(auto-complete)：补充单元测试并完善语义化 DOM（@ffgenius）[#119](https://github.com/antdv-next/antdv-next/pull/119)
* test(select)：补充单元测试并完善语义化 DOM（@ffgenius）[#121](https://github.com/antdv-next/antdv-next/pull/121)

**文档**

* docs：修复 Vite 使用章节中的拼写问题（@dzzzzzy）[#118](https://github.com/antdv-next/antdv-next/pull/118)
* fix(docs)：修复 i18n 章节中的文档错误（@dzzzzzy）[#120](https://github.com/antdv-next/antdv-next/pull/120)

**新贡献者**

* @qianYuanJ 首次贡献（[#109](https://github.com/antdv-next/antdv-next/pull/109)）
* @yushi0114 首次贡献（[#111](https://github.com/antdv-next/antdv-next/pull/111)）
* @dzzzzzy 首次贡献（[#118](https://github.com/antdv-next/antdv-next/pull/118)）

**完整更新记录**
[https://github.com/antdv-next/antdv-next/compare/antdv-next@1.0.1...antdv-next@1.0.2](https://github.com/antdv-next/antdv-next/compare/antdv-next@1.0.1...antdv-next@1.0.2)

## V1.0.0 - 2026-02-03

- 同步更新至 Ant Design v6.2.2版本
- 修复若干已知问题，提升组件稳定性
- 替换`classNames` -> `classes`
- 优化`Select.Option`使用`options`代替，对于相关Select类型的组件都做了相同的优化处理
- 优化`Checkbox.Group`使用`options`代替
- 优化`Radio.Group`使用`options`代替
- 更多参考[升级指南](/docs/vue/migration-antdv-next)
