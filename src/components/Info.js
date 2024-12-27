import React from 'react';
import './styles/info.styles.scss';

function Info() {
  return (
    <div className="container w-100 mt-4 pt-1 info__outer">
      <h2 className="text-center fw-bold info__header">
        Why&nbsp;
        <span className="info__span">Mushroom Edibility Prediction </span>
        Matters
      </h2>
      <p className="mt-4 pt-1 info__text">
        Mushroom edibility prediction is essential for ensuring safety and
        fostering sustainable practices. Mushrooms are a valuable resource, rich
        in nutrients like vitamins, minerals, and antioxidants, and play a
        critical role in ecosystems by recycling nutrients. However,
        distinguishing between edible and poisonous varieties can be
        challenging, even for experts, as many species appear similar. A
        mushroom edibility prediction model leverages advanced technology, using
        image recognition and data analysis to classify mushrooms as edible or
        poisonous quickly and accurately. This tool is invaluable for farmers,
        foragers, and mycologists, offering safe harvesting, guiding
        enthusiasts, and accelerating research. By reducing the risks associated
        with manual identification, the model promotes safety, sustainability,
        and efficient utilization of this versatile natural resource.
      </p>
    </div>
  );
}

export default Info;
