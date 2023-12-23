'use client'

import Link from 'next/link'
// @ts-ignore
import { usePathname } from 'next/navigation'

import { Select, Space } from 'antd'
import Image from 'next/image'
import alFlag from '@/assets/svg/al.svg'
import enFlag from '@/assets/svg/en.svg'
import itFlag from '@/assets/svg/it.svg'
import arFlag from '@/assets/svg/ar.svg'

const allLocales = [
  {
    value: 'al',
    label: 'Shqip',
    flag: alFlag
  },
  {
    value: 'en',
    label: 'English',
    flag: enFlag
  },
  {
    value: 'it',
    label: 'Italiano',
    flag: itFlag
  },
  {
    value: 'ar',
    label: 'العربية',
    flag: arFlag
  }
]

const { Option } = Select

export default function LocaleSwitcher() {
  const pathName = usePathname()

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  const defaultLocale = pathName.split('/')[1] || 'en'

  const handleChange = (value: any) => {
    return
  }

  return (
    <Select
      defaultValue={defaultLocale}
      style={{ width: 116 }}
      optionLabelProp='label'
      onChange={value => handleChange(value)}
    >
      {allLocales.map(locale => (
        <Option key={locale.value} value={locale.value} label={locale.label}>
          <Link href={redirectedPathName(locale.value)}>
            <Space>
              <Image
                src={locale.flag}
                alt={`flag - ${locale.value}`}
                className='h-6 w-6 rounded-full object-cover'
              />
              <p className='capitalize'>{locale.label}</p>
            </Space>
          </Link>
        </Option>
      ))}
    </Select>
  )
}
