import React, { useState } from 'react';
import styles from "./page.module.css";

function App() {
  const [selectedFruit, setSelectedFruit] = useState('');
  const [showSelector, setShowSelector] = useState(true);
  const fruits = ['사과', '바나나', '체리', '딸기', '포도'];

  const handleFruitSelect = (event) => {
    setSelectedFruit(event.target.value);
  };

  const toggleSelector = () => {
    setShowSelector(!showSelector);
  };

  return (
    <div className="App">
      <h1>과일 선택하기</h1>
      
      {/* 과일 선택 */}
      {showSelector && (
        <div>
          <label htmlFor="fruitSelect">과일 선택:</label>
          <select id="fruitSelect" onChange={handleFruitSelect} value={selectedFruit}>
            <option value="">과일을 선택하세요</option>
            {fruits.map((fruit, index) => (
              <option key={index} value={fruit}>{fruit}</option>
            ))}
          </select>
        </div>
      )}

      {/* 과일 선택 결과 표시 */}
      {selectedFruit && (
        <div>
          <h2>선택한 과일: {selectedFruit}</h2>
        </div>
      )}

      {/* 선택기 숨기기/보이기 버튼 */}
      <button onClick={toggleSelector}>
        {showSelector ? '선택기 숨기기' : '선택기 보이기'}
      </button>
    </div>
  );
}

export default App;
