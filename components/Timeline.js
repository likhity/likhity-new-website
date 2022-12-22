import styles from '../styles/Timeline.module.scss';

const Left = ({ timeText, start, end, children }) => (
  <div className={`${styles.timelineElement} ${styles.left}`}>
    <div className={`${styles.timelineElementItems}`}>
      {
        children
      }
      {
        start && <div className={styles.startTimeline}></div> 
      }
      {
        end && <div className={styles.endTimeline}></div> 
      }
    </div>
    <div className={`${styles.timelineElementYear}`}>
      <p className={`mb-0`}>{timeText}</p>
    </div>
  </div>
)

const Right = ({ timeText, start, end, children }) => (
  <div className={`${styles.timelineElement} ${styles.right}`}>
    <div className={`${styles.timelineElementYear}`}>
      <p className={`mb-0`}>{timeText}</p>
    </div>
    <div className={`${styles.timelineElementItems}`}>
      {
        children
      }
      {
        start && <div className={styles.startTimeline}></div> 
      }
      {
        end && <div className={styles.endTimeline}></div> 
      }
    </div>
  </div>
)

const Break = ({ children }) => (
  <div className={styles.timelineBreak}>
    {
      children
    }
  </div>
)

const Timeline = ({ children }) => {
  return (
    <div className={styles.timeline}>
      {
        children
      }
    </div>
  )
}

Timeline.Left = Left;
Timeline.Right = Right;
Timeline.Break = Break;

export default Timeline;