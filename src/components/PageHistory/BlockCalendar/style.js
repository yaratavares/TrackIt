import styled from "styled-components";

export const BoxCalendar = styled.div`
  .calendarStyle {
    width: 100%;
    height: 402px;
    border: none;
    border-radius: 10px;
    .react-calendar__month-view__weekdays {
      padding-bottom: 23px;
    }

    .react-calendar__month-view__days {
      button {
        padding-top: 14px;
        padding-bottom: 14px;
        clip-path: circle();
      }
    }
  }
  .noDone {
    background-color: #ea5766;
  }

  .done {
    background-color: #8cc654;
  }
`;
