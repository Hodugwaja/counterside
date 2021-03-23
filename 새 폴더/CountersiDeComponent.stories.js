/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import CountersiDe from "./CountersiDeComponent";

export const myProps = {
  id: "1",
  className: "mySampleClass",
  sampleString: "Test Task",
  sampleDate: new Date(2018, 0, 1, 9, 0)
};

export const actions = {
  onActionOne: action("onActionOne"),
  onActionTwo: action("onActionTwo")
};

storiesOf("CountersiDe", module)
  .add("default", () => <CountersiDe {...myProps} {...actions} />)
  .add("pinned", () => <CountersiDe {...myProps} pinned={true} {...actions} />)
  .add("archived", () => (
    <CountersiDe {...myProps} archived={true} {...actions} />
  ));
