import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  [...block.children].forEach((row) => {
    const [questionDiv, answerDiv] = row.children;
    const details = document.createElement('details');
    moveInstrumentation(row, details);

    const summary = document.createElement('summary');
    summary.append(...questionDiv.childNodes);
    details.append(summary);

    const answer = document.createElement('div');
    answer.className = 'faq-answer';
    answer.append(...answerDiv.childNodes);
    details.append(answer);

    row.replaceWith(details);
  });
}
