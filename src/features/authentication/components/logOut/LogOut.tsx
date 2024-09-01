import { Button } from '@components/UIKit'
import { HiOutlineArrowRightOnRectangle } from 'react-icons/hi2'
import useLogOut from '../../hooks/useLogOut.tsx'

const LogOut = () => {
  const { handleOnLogOut } = useLogOut()
  return (
    <div>
      <Button
        variant="default"
        type="button"
        size="medium"
        startIcon={
          <HiOutlineArrowRightOnRectangle className="rotate-180" size="20" />
        }
        onClick={handleOnLogOut}
      >
        خروج
      </Button>
    </div>
  )
}

export default LogOut
