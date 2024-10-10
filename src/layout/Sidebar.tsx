//lib
import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Collapse } from 'react-collapse'
import { IconType } from 'react-icons'
import { FiChevronDown } from 'react-icons/fi'
import { HiMiniStar } from 'react-icons/hi2'
import { IoSettingsOutline } from 'react-icons/io5'
import { GrMoney } from 'react-icons/gr'
import { MdManageAccounts } from 'react-icons/md'
import { SlControlPlay } from 'react-icons/sl'
//component
import { Text } from '@components/UIKit'


interface SidBarItem {
  id: number
  name: string
  icon: IconType
  menus?: Menu[]
}

interface Menu {
  id: number
  name: string
  path?: string
  subMenus?: SubMenu[]
}

interface SubMenu {
  id: number
  name: string
  path?: string
}
const sidBarItems: SidBarItem[] = [
  {
    id: 1,
    name: 'مدیریت سیستم',
    icon: MdManageAccounts,
    menus: [
      {
        id: 10,
        name: 'مدیریت گروه کاربری ',
        path: '/systemManagement/rolesManagement',
      },
      {
        id: 11,
        name: 'مدیریت کاربران',
        path: '/systemManagement/usersManagement',
      },
      {
        id: 13,
        name: 'منو ها',
        path: '/systemManagement/menus',
      },
    ],
  },
  {
    id: 2,
    name: 'محصولات',
    icon: GrMoney,
    menus: [
      {
        id: 20,
        name: 'قیمت گذاری',
        path: '/products/pricing',
      },
      {
        id: 21,
        name: 'اطلاعات محصول',
        path: '/products/information',
      },
    ],
  },
  {
    id: 9,
    name: 'تنظیمات',
    icon: IoSettingsOutline,
    menus: [
      {
        id: 90,
        name: 'مدیریت محتوا',
        path: '/setting/cms',
      },
      {
        id: 91,
        name: 'دسترسی‌های کاربر',
        path: '/setting/accessLevels',
      },
    ],
  },
]

const OldSidebar = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const [openSidBarItem, setOpenSidBarItem] = useState<null | SidBarItem>(null)
  const [openMenu, setOpenMenu] = useState<null | SubMenu>(null)
  const [selectedElement, setSelectedElement] = useState<null | number>(null)
  const [sideBarStatus, setSideBarStatus] = useState<'close' | 'open'>('open')

  const [showHiMiniStarItem, setShowHiMiniStarItem] = useState<Menu | null>(
    null
  )
  const [showHiMiniStarSubItem, setShowHiMiniStarSubItem] =
    useState<SubMenu | null>(null)

  const handleSidebarItems = (pathname: string) => {
    sidBarItems.forEach((sideBarItem) => {
      sideBarItem.menus?.forEach((menu) => {
        if (pathname && menu.path && pathname.startsWith(menu.path)) {
          setOpenSidBarItem(sideBarItem)
          setSelectedElement(menu.id)
        } else if (menu.subMenus) {
          menu.subMenus.forEach((subMenu) => {
            if (pathname && subMenu.path && pathname.startsWith(subMenu.path)) {
              setOpenSidBarItem(sideBarItem)
              setOpenMenu(menu)
              setSelectedElement(subMenu.id)
            }
          })
        }
      })
    })
  }
  useEffect(() => {
    handleSidebarItems(pathname)
  }, [pathname])

  return (
    <div
      className={`flex ${sideBarStatus === 'open' ? 'w-[240px]' : 'w-[90px]'} flex-col gap-2 border-l-[1px] border-border p-3 transition-[width] duration-700`}
    >
      <SlControlPlay
        className={`absolute z-10 hover:cursor-pointer ${sideBarStatus === 'open' ? 'right-[220px]' : 'right-[80px] rotate-180'} text-secondary-70 transition-all duration-700`}
        size={22}
        onClick={() => {
          if (sideBarStatus === 'close') {
            setSideBarStatus('open')
          } else {
            setSideBarStatus('close')
            setOpenSidBarItem(null)
            setOpenMenu(null)
          }
        }}
      />
      {sidBarItems.map((sidBarItem) => {
        return (
          <div
            key={sidBarItem.id}
            className={`${sideBarStatus === 'open' ? 'w-[230px]' : 'w-[90px]'}`}
          >
            <div
              className={`
                ${sideBarStatus === 'open' ? 'w-[200px]' : 'w-[80px]'} hover:text-text-50" relative flex items-center gap-2 p-2 hover:cursor-pointer hover:bg-surface-30 hover:font-bold
              `}
              onClick={() => {
                if (sideBarStatus === 'open')
                  if (sidBarItem === openSidBarItem) {
                    setOpenSidBarItem(null)
                  } else setOpenSidBarItem(sidBarItem)
              }}
            >
              <sidBarItem.icon
                size={sideBarStatus === 'open' ? 20 : 24}
                className="text-gray-500"
              />
              {sideBarStatus === 'open' && (
                <Text variant="body2">{sidBarItem.name}</Text>
              )}
              {sideBarStatus === 'open' && (
                <FiChevronDown
                  className={`absolute left-4 h-5 w-5 transition-transform duration-1000 ${
                    openSidBarItem?.id === sidBarItem.id
                      ? 'rotate-180 transform'
                      : null
                  }`}
                />
              )}
            </div>
            <Collapse
              isOpened={openSidBarItem?.id === sidBarItem.id}
              className="collapse-css-transition"
            >
              {sidBarItem?.menus && (
                <div className="flex flex-col gap-2 text-sm">
                  {sidBarItem?.menus.map((menu) => (
                    <div
                      key={menu.id}
                      onClick={() => {
                        menu?.path && navigate(menu.path)
                      }}
                    >
                      <div
                        className="mb-1 mr-6 flex items-center gap-2 hover:cursor-pointer hover:font-bold hover:text-text-50"
                        onMouseEnter={() => setShowHiMiniStarItem(menu)}
                        onMouseLeave={() => setShowHiMiniStarItem(null)}
                        onClick={() => {
                          setOpenMenu(openMenu?.id === menu.id ? null : menu)
                        }}
                      >
                        {sideBarStatus === 'open' && (
                          <div
                            className={`text-xs ${selectedElement === menu.id && 'font-bold'}`}
                          >
                            {menu.name}
                          </div>
                        )}
                        {sideBarStatus === 'open' &&
                          showHiMiniStarItem?.id === menu?.id && (
                            <HiMiniStar
                              size={16}
                              className={`animate-star-appear transition duration-150 ease-in-out`}
                            />
                          )}
                        {sideBarStatus === 'open' && menu?.subMenus && (
                          <FiChevronDown
                            className={`ml-auto h-4 w-4 transition-transform duration-1000 ${
                              openMenu?.id === menu.id
                                ? 'rotate-180 transform'
                                : null
                            }`}
                          />
                        )}
                      </div>
                      {openMenu?.id === menu.id && (
                        <div className="space-y-1 text-xs">
                          {menu?.subMenus?.map((subMenu) => (
                            <div
                              onClick={() => {
                                subMenu?.path && navigate(subMenu.path)
                              }}
                              className="mr-10 flex items-center gap-2 hover:cursor-pointer hover:font-bold hover:text-text-50"
                              onMouseEnter={() =>
                                setShowHiMiniStarSubItem(subMenu)
                              }
                              onMouseLeave={() =>
                                setShowHiMiniStarSubItem(null)
                              }
                            >
                              {sideBarStatus === 'open' && (
                                <div
                                  className={`text-xs ${selectedElement === subMenu.id && 'font-bold'}`}
                                >
                                  {subMenu.name}
                                </div>
                              )}
                              {sideBarStatus === 'open' &&
                                showHiMiniStarSubItem?.id === subMenu?.id && (
                                  <HiMiniStar
                                    size={14}
                                    className={`animate-star-appear transition-transform duration-1000`}
                                  />
                                )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </Collapse>
          </div>
        )
      })}
    </div>
  )
}
export default OldSidebar
