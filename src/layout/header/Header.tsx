//lib
import { MouseEvent } from 'react'
import { ClipLoader } from 'react-spinners'
import { useLocation, useNavigate } from 'react-router-dom'
import { MdClose } from 'react-icons/md'

//component
import Logout from '../../features/authentication/components/logOut/LogOut.tsx'
import { Text } from '@components/UIKit'
import ThemeToggle from '@components/UIKit/themeToggle/ThemeToggle.tsx'
import {
  selectAllBookmarks,
  updateBookmarks,
} from '@/redux/slices/header/headerSlice.ts'
import { useAppDispatch, useAppSelector } from '@/redux/hooks.ts'
import { useGetUserInfoQuery } from '@/redux/services/userInfo/userInfoApi.ts'

import Logo from '../../assets/images/footer_logo.png'

const Header = () => {
  const navigate = useNavigate()
  const allBookmarks = useAppSelector(selectAllBookmarks)
  const location = useLocation()
  const { isLoading: isGetUserInfoLoading, data: userInfoData } =
    useGetUserInfoQuery()
  const dispatch = useAppDispatch()

  function removeBookmarkHandler(e: MouseEvent<HTMLDivElement>, path: string) {
    e.preventDefault()

    dispatch(
      updateBookmarks({
        bookmarkPath: path,
        bookmarkName: '',
      })
    )
  }

  return (
    <div className="relative flex items-center justify-between gap-2 border-b-[1px] border-border bg-white p-3">
      <div className="flex w-[220px] items-center justify-between">
        <Logout />
        <ThemeToggle />
        {isGetUserInfoLoading ? (
          <ClipLoader size="15" />
        ) : (
          <Text variant="subtitle5">{userInfoData?.FullName ?? '-'}</Text>
        )}
      </div>
      <div className="absolute right-40 flex gap-2">
        {allBookmarks.map((bookmark) => {
          return (
            <div
              className={`
                flex w-auto items-center gap-2 rounded-md border-2 border-border px-2 py-1 ${`/${bookmark.bookmarkPath}` === location.pathname ? 'bg-[#8CC3C1]' : 'bg-[#EAF1F9]'}`}
              onClick={() => navigate(`${bookmark.bookmarkPath}`)}
            >
              <Text variant="label" className="hover:cursor-pointer">
                {bookmark.bookmarkName}
              </Text>

              <div
                onClick={(e) => removeBookmarkHandler(e, bookmark.bookmarkPath)}
              >
                <MdClose className="cursor-pointer text-sm hover:text-primary-60" />
              </div>
            </div>
          )
        })}
      </div>
      <img
        src={Logo}
        alt="logo"
        className="absolute right-10 h-10 w-12 cursor-pointer"
        onClick={() => navigate('/home')}
      />
    </div>
  )
}

export default Header
