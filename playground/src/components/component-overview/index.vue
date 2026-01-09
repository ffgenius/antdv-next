<script setup lang="ts">
  import { SearchOutlined } from '@antdv-next/icons'
  import { storeToRefs } from 'pinia'
  import { onMounted, ref, useTemplateRef } from 'vue'
  import { RouterLink } from 'vue-router'
  import { useAppStore } from '@/stores/app';
  import { covers } from './covers'


  defineOptions({ name: 'ComponentOverview' })

  const search = ref('')
  const inputRef = useTemplateRef('searchInput')
  const searchBarAffixed = ref(false)
    
  const { siderMenus, siderLocales, locale } = storeToRefs(useAppStore())

  const baseMenus = siderMenus.value.slice(2)
  const searchMenus = ref(baseMenus)

  function handleAffixChange(affixed?: boolean) {
    searchBarAffixed.value = affixed ?? false
  }

  function handleSearchChange(e: Event) {
    const value = (e.target as HTMLInputElement).value.trim()
    if (value) {
      searchMenus.value = baseMenus.map(group => {
        const filteredChildren = group.children.filter(comp =>
          comp.label.toLowerCase().includes(value.toLowerCase())
        )
        return {
          ...group,
          children: filteredChildren
        }
      }).filter(group => group.children.length > 0)
    } else {
      searchMenus.value = baseMenus
    }
  }

  onMounted(() => {
    inputRef.value?.focus()
  })
</script>

<template>
  <section>
    <a-divider />
    <a-affix :offset-top="80" @change="handleAffixChange">
      <div class="components-overview-affix" :class="{ 'components-overview-affixed': searchBarAffixed }">
        <a-input v-model:value="search" ref="searchInput" auto-focus variant="borderless" placeholder="搜索组件" class="components-overview-search" :style="{ fontSize: searchBarAffixed ? '18px' : '' }" @change="handleSearchChange">
          <template #suffix>
            <SearchOutlined />
          </template>
        </a-input>
      </div>
    </a-affix>
    <a-divider/>
    <template v-for="group in searchMenus" :key="group.key">
      <div class="component-overview">
        <h2 class="component-overview-group-title">
          <a-space>
            {{ siderLocales?.[group.key]?.[locale] ?? group.label }}
            <a-tag>{{ group.children.length }}</a-tag>
          </a-space>
        </h2>
        <a-row :gutter="[24, 24]">
          <template v-for="comp in group.children" :key="comp.key">
            <a-col :xs="24" :sm="12" :lg="8" :xl="6">
              <RouterLink :to="locale === 'zh-CN' ? `${comp.key}-cn` : comp.key" style="text-decoration: none; color: inherit;">
                <a-card size="small" class="components-overview-card">
                  <template #title>
                    <div class="components-overview-title">{{ siderLocales?.[comp.key]?.[locale] ?? comp.label }}</div>
                  </template>
                  <div class="components-overview-img">
                    <img
                      :src="covers?.[comp.label]?.cover"
                      :alt="comp.label">
                  </div>
                </a-card>
              </RouterLink>
            </a-col>
          </template>
        </a-row>
      </div>
    </template>
  </section>
</template>

<style scoped lang="less">
  .components-overview {
    padding: 0;

    &-group-title {
      margin-bottom: 24px !important;
    }

    &-title {
      overflow: hidden;
      color: var(--text-color);
      text-overflow: ellipsis;
    }

    &-img {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 152px;
    }

    &-card {
      cursor: pointer;
      transition: all 0.5s ease 0s;

      &:hover {
        box-shadow: var(--shadow-2);
      }
    }

    &-affix {
      transition: all 0.25s;
    }

    &-affixed {
      padding: 12px;
      margin: -8px;
      border-radius: 6px;
      border: 0 solid;
      background-color: rgb(255, 255, 255);
      box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3)0px 3px 7px -3px;
    }
  }

  .components-overview-search {
    width: 100%;
    padding: 0;
    font-size: 20px;
    border: 0;
    box-shadow: none;

    input {
      font-size: 20px;
    }

    .anticon {
      color: #bbb;
    }
  }

  .components-overview-img img {
    object-fit: cover;
    max-height: 100%;
    max-width: 100%;
  }
</style>
