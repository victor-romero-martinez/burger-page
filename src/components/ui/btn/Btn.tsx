import './styles.css'

export default function Btn({ children, click }: Props) {
  return (
    <button className="btn" type='button' onClick={click}>
      {children}
    </button>
  )
};

type Props = {
  children: React.ReactNode,
  click?: () => void
}