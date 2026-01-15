import React from 'react'

const Result = ({score, totalQuestion, restartQuiz, review}) => {
  return (
    <div>
        <h2>KẾT QUẢ</h2>
        <p className="result">Bạn trả lời đúng {score} / {totalQuestion}</p>
        <div className="resultButtonsContainer">
            <button className="result-button" onClick={review}>Xem lại</button>
            <button className="result-button" onClick={restartQuiz}>Làm lại</button>
        </div>
    </div>
  )
}

export default Result