import { BoardSimpleType } from '@type/community';
import BoardCard from './BoardCard';

interface BoardListSectionProps {
  data: BoardSimpleType[];
}

const BoardListSection = ({ data }: BoardListSectionProps) => {
  return (
    <div>
      {data.slice(0, 20).map((board) => (
        <BoardCard
          key={board.id}
          to={board.id}
          title={board.title}
          text={board.text}
          url={board.url}
          date={board.writeDate}
          view={board.view}
          like={board.like}
          comment={board.comment}
        />
      ))}
    </div>
  );
};

export default BoardListSection;
